'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { Product } from '@/data/products';

interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalItems: number;
    totalAmount: number;
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'CLEAR_CART' };

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalAmount: 0
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (existingItemIndex > -1) {
                const updatedItems = state.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });

                return {
                    ...state,
                    items: updatedItems,
                    totalItems: state.totalItems + 1,
                    totalAmount: state.totalAmount + action.payload.price
                };
            }

            const newItem: CartItem = { ...action.payload, quantity: 1 };
            return {
                ...state,
                items: [...state.items, newItem],
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + action.payload.price
            };
        }

        case 'REMOVE_FROM_CART': {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            if (!itemToRemove) return state;

            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                totalItems: state.totalItems - itemToRemove.quantity,
                totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity)
            };
        }

        case 'UPDATE_QUANTITY': {
            const { id, quantity } = action.payload;
            if (quantity < 1) return state;

            const itemToUpdate = state.items.find(item => item.id === id);
            if (!itemToUpdate) return state;

            const quantityDiff = quantity - itemToUpdate.quantity;

            const updatedItems = state.items.map(item => {
                if (item.id === id) {
                    return { ...item, quantity };
                }
                return item;
            });

            return {
                ...state,
                items: updatedItems,
                totalItems: state.totalItems + quantityDiff,
                totalAmount: state.totalAmount + (itemToUpdate.price * quantityDiff)
            };
        }

        case 'CLEAR_CART':
            return initialState;

        default:
            return state;
    }
};

interface CartContextType extends CartState {
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product: Product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem) {
            toast.success('Məhsul sayı yeniləndi!');
        } else {
            toast.success('Məhsul səbətə əlavə edildi!');
        }
    };

    const removeFromCart = (productId: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
        toast.info('Məhsul səbətdən silindi');
    };

    const updateQuantity = (productId: number, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
        toast.info('Məhsul sayı yeniləndi');
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
        toast.info('Səbət təmizləndi');
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 