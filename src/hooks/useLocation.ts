import { useState, useEffect } from 'react';

interface LocationData {
  country: string;
  city: string;
  timezone: string;
  currency: string;
  language: string;
}

const locationDefaults: LocationData = {
  country: 'US',
  city: 'New York',
  timezone: 'America/New_York',
  currency: 'USD',
  language: 'en'
};

export const useLocation = () => {
  const [location, setLocation] = useState<LocationData>(locationDefaults);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try to get location from localStorage first
        const savedLocation = localStorage.getItem('user-location');
        if (savedLocation) {
          setLocation(JSON.parse(savedLocation));
          setLoading(false);
          return;
        }

        // Fallback to IP-based detection (you can replace with actual service)
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          const locationData: LocationData = {
            country: data.country_code || 'US',
            city: data.city || 'New York',
            timezone: data.timezone || 'America/New_York',
            currency: data.currency || 'USD',
            language: data.languages?.split(',')[0] || 'en'
          };
          
          setLocation(locationData);
          localStorage.setItem('user-location', JSON.stringify(locationData));
        }
      } catch (error) {
        console.log('Location detection failed, using defaults');
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);

  const updateLocation = (newLocation: Partial<LocationData>) => {
    const updated = { ...location, ...newLocation };
    setLocation(updated);
    localStorage.setItem('user-location', JSON.stringify(updated));
  };

  return { location, loading, updateLocation };
};