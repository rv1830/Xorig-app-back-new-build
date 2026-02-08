"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MARKETPLACE_DATA } from "@/data/marketplace";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MegaDropdown({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[1100px] rounded-3xl
          bg-[#10002B]/95 backdrop-blur-2xl border border-white/10 shadow-2xl z-50"
          onMouseLeave={onClose}
        >
          <div className="grid grid-cols-6 gap-8 p-10">
            {MARKETPLACE_DATA.map((intent) => (
              <div key={intent.id} className="space-y-4">
                {/* Intent title */}
                <Link
                  href={`/marketplace/${intent.id}`}
                  className="block text-xs font-extrabold uppercase tracking-widest text-[#FDC500] hover:opacity-80"
                >
                  {intent.name} →
                </Link>

                {/* Subcategories */}
                <ul className="space-y-2">
                  {intent.subcategories.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={`/marketplace/${intent.id}/${sub.id}`}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 px-10 py-4 text-xs text-gray-400">
            Not sure? Pick your intent anyway — XO guides the exact build.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}