import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { X, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  preference: boolean;
  statistic: boolean;
  marketing: boolean;
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preference: false,
    statistic: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = { necessary: true, preference: true, statistic: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const minimal = { necessary: true, preference: false, statistic: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(minimal));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl p-6 bg-white shadow-lg">
        {!showSettings ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">We use cookies</h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your experience, analyze site traffic, and personalize content.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm" onClick={() => setShowSettings(true)}>
                <Settings className="w-4 h-4 mr-1" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={rejectAll}>
                Reject All
              </Button>
              <Button size="sm" onClick={acceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Cookie Preferences</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-gray-600">Required for website functionality</p>
                </div>
                <Switch checked={true} disabled />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Preference Cookies</h4>
                  <p className="text-sm text-gray-600">Remember your preferences and settings</p>
                </div>
                <Switch 
                  checked={preferences.preference}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, preference: checked }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Statistic Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how visitors interact with our website</p>
                </div>
                <Switch 
                  checked={preferences.statistic}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, statistic: checked }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Used to deliver personalized advertisements</p>
                </div>
                <Switch 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
                />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button variant="outline" onClick={rejectAll}>
                Reject All
              </Button>
              <Button onClick={savePreferences}>
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};