"use client"
import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { ClockCircleOutlined, BellOutlined, RocketOutlined } from '@ant-design/icons';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg w-24">
            <div className="text-3xl font-bold text-primary dark:text-blue-400">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
              {unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNotifyMe = () => {
    console.log('Notify email:', email);
    // Implement your notification logic here
  };

  // Set target date to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div className="min-h-screen dark dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 relative">
          <RocketOutlined className="text-6xl text-primary dark:text-blue-400 animate-bounce" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Something Awesome is Coming Soon!
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          We're working hard to bring you an amazing new feature. Stay tuned!
        </p>

        <div className="flex justify-center mb-12">
          <Countdown targetDate={targetDate} />
        </div>

        <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Get Notified When We Launch
          </h3>

          <div className="flex space-x-2">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              prefix={<BellOutlined className="text-gray-400" />}
              className="dark:bg-gray-600 dark:text-white dark:border-gray-500"
            />
            <Button
              type="primary"
              onClick={handleNotifyMe}
              className="bg-primary hover:bg-primary-dark"
            >
              Notify Me
            </Button>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Don't worry, we won't spam you! 🚀
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .dark .ant-input-affix-wrapper {
          background-color: #374151 !important;
          border-color: #4B5563 !important;
        }

        .dark .ant-input-affix-wrapper input {
          background-color: transparent !important;
          color: white !important;
        }

        .dark .ant-input-affix-wrapper:hover,
        .dark .ant-input-affix-wrapper:focus {
          border-color: #60A5FA !important;
        }

        .dark .ant-btn-primary {
          background-color: #3B82F6 !important;
          border-color: #3B82F6 !important;
        }

        .dark .ant-btn-primary:hover {
          background-color: #2563EB !important;
          border-color: #2563EB !important;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
