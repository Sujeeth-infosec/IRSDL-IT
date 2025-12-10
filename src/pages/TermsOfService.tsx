import { SectionHeading } from "@/components/SectionHeading";

export default function TermsOfService() {
  return (
    <main className="pt-16 lg:pt-20">
      <section className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Legal"
            title="Terms of Service"
            description="Terms and conditions for using our services"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2>Use License</h2>
            <p>Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.</p>
            
            <h2>Service Availability</h2>
            <p>We strive to provide uninterrupted service but cannot guarantee 100% uptime. We reserve the right to modify or discontinue services with notice.</p>
            
            <h2>User Responsibilities</h2>
            <p>Users are responsible for maintaining the confidentiality of their account information and for all activities under their account.</p>
            
            <h2>Limitation of Liability</h2>
            <p>IRSDL shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
            
            <h2>Contact Information</h2>
            <p>For questions regarding these terms, please contact us at contact@irsdl.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}