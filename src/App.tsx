/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenView, ProductItem, BagItem } from './types';
import { INITIAL_BAG_ITEMS, PRODUCTS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AtelierBagDrawer } from './components/AtelierBagDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { BespokeAppointmentModal } from './components/BespokeAppointmentModal';
import { Toast } from './components/Toast';
import { LandingScreen } from './screens/LandingScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('landing');
  const [bagItems, setBagItems] = useState<BagItem[]>(INITIAL_BAG_ITEMS);
  const [wishlistedIds, setWishlistedIds] = useState<Set<string>>(new Set(['prod-01', 'prod-03']));
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleNavigate = (screen: ScreenView) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistedIds((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
        showToast('Removed from Personal Vault Wishlist.');
      } else {
        next.add(productId);
        showToast('Preserved in Personal Vault Wishlist.');
      }
      return next;
    });
  };

  const handleAddToBag = (product: ProductItem, size?: string) => {
    const chosenSize = size || product.availableSizes[0] || 'Bespoke MTM';
    const existingIndex = bagItems.findIndex(
      (item) => item.productId === product.id && item.size === chosenSize
    );

    if (existingIndex > -1) {
      const updated = [...bagItems];
      updated[existingIndex].quantity += 1;
      setBagItems(updated);
    } else {
      const newItem: BagItem = {
        id: `bag-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        productId: product.id,
        title: product.title,
        house: product.categoryLabel,
        priceNum: product.priceNum,
        priceFormatted: product.price,
        size: chosenSize,
        quantity: 1,
        image: product.image
      };
      setBagItems([newItem, ...bagItems]);
    }

    showToast(`${product.title} (${chosenSize}) added to Atelier Bag.`);
    setIsBagOpen(true);
  };

  const handleRemoveBagItem = (id: string) => {
    setBagItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  return (
    <div className="min-h-screen bg-[#121316] text-[#e3e2e6] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#3c2f00]">
      {/* Persistent Navigation Header */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        bagCount={bagItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenBag={() => setIsBagOpen(true)}
        wishlistCount={wishlistedIds.size}
        onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
      />

      {/* Main Screen Rendering */}
      <main className="flex-1 w-full">
        {currentScreen === 'landing' && (
          <LandingScreen
            onQuickView={(prod) => setQuickViewProduct(prod)}
            onAddToBag={handleAddToBag}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            onToggleWishlist={handleToggleWishlist}
            wishlistedIds={wishlistedIds}
            onShowToast={showToast}
            onNavigateToScreen={(screen) => handleNavigate(screen)}
          />
        )}

        {currentScreen === 'dashboard' && (
          <DashboardScreen
            onNavigateToSettings={() => handleNavigate('settings')}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            onQuickView={(prod) => setQuickViewProduct(prod)}
            onShowToast={showToast}
            wishlistedIds={wishlistedIds}
          />
        )}

        {currentScreen === 'settings' && (
          <SettingsScreen
            onShowToast={showToast}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {currentScreen === 'contact' && (
          <ContactScreen
            onShowToast={showToast}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}
      </main>

      {/* Persistent Haute Couture Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
      />

      {/* Interactive Atelier Bag Drawer */}
      <AtelierBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onRemoveItem={handleRemoveBagItem}
        onClearBag={handleClearBag}
        onShowToast={showToast}
      />

      {/* Quick View Garment Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToBag={handleAddToBag}
        onShowToast={showToast}
        onOpenAppointmentModal={() => {
          setQuickViewProduct(null);
          setIsAppointmentModalOpen(true);
        }}
      />

      {/* Bespoke Fitting Reservation Modal */}
      <BespokeAppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        onSuccess={showToast}
      />

      {/* Luxury Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
