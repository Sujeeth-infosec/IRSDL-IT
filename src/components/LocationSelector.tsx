import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocation } from '@/hooks/useLocation';
import { Globe } from 'lucide-react';

const locations = [
  { code: 'US', name: 'United States', currency: 'USD', timezone: 'America/New_York' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', timezone: 'Europe/London' },
  { code: 'DE', name: 'Germany', currency: 'EUR', timezone: 'Europe/Berlin' },
  { code: 'FR', name: 'France', currency: 'EUR', timezone: 'Europe/Paris' },
  { code: 'CA', name: 'Canada', currency: 'CAD', timezone: 'America/Toronto' },
  { code: 'AU', name: 'Australia', currency: 'AUD', timezone: 'Australia/Sydney' },
];

export const LocationSelector = () => {
  const { location, updateLocation } = useLocation();

  const handleLocationChange = (countryCode: string) => {
    const selectedLocation = locations.find(loc => loc.code === countryCode);
    if (selectedLocation) {
      updateLocation({
        country: selectedLocation.code,
        currency: selectedLocation.currency,
        timezone: selectedLocation.timezone,
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-500" />
      <Select value={location.country} onValueChange={handleLocationChange}>
        <SelectTrigger className="w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {locations.map((loc) => (
            <SelectItem key={loc.code} value={loc.code}>
              {loc.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};