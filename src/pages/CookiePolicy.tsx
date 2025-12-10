import { SectionHeading } from "@/components/SectionHeading";

export default function CookiePolicy() {
  return (
    <main className="pt-16 lg:pt-20">
      <section className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Legal"
            title="Cookie Policy"
            description="How we use cookies and similar technologies"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.</p>
            
            <h2>How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve our services and user experience</li>
              <li>Provide personalized content</li>
            </ul>
            
            <h2>Types of Cookies</h2>
            <p>We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).</p>
            
            <h2>Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p>
            
            <h2>Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at contact@irsdl.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}