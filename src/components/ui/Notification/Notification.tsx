import { X } from 'lucide-react';

interface NotificationBannerProps {
  title: string;
  onClose?: () => void;
}

export default function NotificationBanner({ title, onClose = () => {} }: NotificationBannerProps) {
  return (
    <div className='w-full bg-gradient-to-r from-orange-500 via-pink-600 to-blue-600 text-white text-sm md:text-base'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-2'>
        <p className='text-center flex-1'>
          <span className='font-medium'>{title}</span>
        </p>

        {/* Close button */}
        <button onClick={onClose} className='ml-4 flex-shrink-0 hover:text-gray-200' aria-label='Close'>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
