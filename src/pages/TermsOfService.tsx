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
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Service Agreement</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Recital</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IRSDL provides its clients with outplacement or outsourcing services. This includes placement of remote contractors.</li>
                <li>IRSDL has been asked or is being considered to be asked by the client to offer its services to the client for the placement of contractors.</li>
                <li>The services will be provided by IRSDL to the client according to the terms and conditions of this service agreement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Definitions & Interpretation</h2>
              <p>Schedule 1 provides the definitions and interpretations for this service agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Agreement - Day To Day Operation</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>The terms and conditions on the IRSDL website provide the procedure for day-to-day activities like request for service by the client, selecting the IRSDL employee and performing other day-to-day activities with respect to this contract.</li>
                <li>It is acknowledged by the client and agreed upon that the nature of this agreement with IRSDL does not establish any form of employment.</li>
                <li>The liability for choosing the appropriate IRSDL employee rests with the client. The hiring is done for independent contractors on the basis of applicable local guidelines.</li>
                <li>The IRSDL employee does not have any authority to enter into contracts on behalf of the client. The agreement does not create any partnership between the client and the IRSDL employee.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Duration</h2>
              <p>This agreement will be applicable on a month-to-month basis, will commence on the starting date as agreed upon. The agreement will continue until terminated in accordance with clause.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>The time for payment to be made to IRSDL is provided in schedule 1 and the requisite terms and conditions as on the IRSDL website.</li>
                <li>The provisions provided in schedule 1 are a part of and operative under this contract.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. No IRSDL Liability</h2>
              <p>In case of any loss, damage, costs or compensation (whether direct or indirect) to the client, no liability shall be incurred by IRSDL. The following cases are included:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Any delay in introduction of IRSDL employees by IRSDL.</li>
                <li>The event of non-acceptance of an offer or an assignment by an IRSDL employee.</li>
                <li>Related to the performance of an IRSDL employee.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. The Client's Indemnity To IRSDL</h2>
              <p>With respect to the following cases of loss or claims the client has to pay indemnity to IRSDL:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>An injury to an IRSDL employee while performing his/her duties for the client.</li>
                <li>Property damage while performance of duties by an IRSDL employee.</li>
              </ul>
              <p className="mt-3">If there are any claims made by an IRSDL employee with respect to his/her termination of services, the client has to indemnify IRSDL for the same.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Restriction On Direct Hiring Of IRSDL Service Employees</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>The Client must pay to IRSDL 15,000.00 USD for each IRSDL employee who has been offered/hired by the client directly.</li>
                <li>When this contract is terminated, no IRSDL employee who is performing an assignment for the client or has performed an assignment for the client in the last 12 months can be offered a contract or permanent employment by the client.</li>
                <li>IRSDL employees' friends, family members, referrals and network cannot be offered work or assignments by IRSDL clients without prior approval.</li>
                <li>No information exchange related to payments and pricing between IRSDL and IRSDL employees shall be permitted.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
              <p>All material prepared by the IRSDL employee will be owned by the client and any intellectual property rights in any such work shall vest in the client.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Privacy</h2>
              <p>All parties agree that they will handle personal information in accordance with the privacy laws.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Confidential Information</h2>
              <p>Subject to clause 10.2, the only information that is disclosed by any party is that which is required by the law.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Warranties</h2>
              <p>Both parties represent and warrant to the other party that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>There are no actions, claims, proceedings or investigations pending or threatened against it or by it of which it is aware, and which may have a material effect on the subject matter of this contract.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
              <p className="mb-3">A party ("the first party") may immediately (or with effect from any later date it may nominate) terminate if:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The second party breaches this contract and does not remedy such breach within 5 business days.</li>
                <li>The other party becomes insolvent.</li>
              </ul>
              <p className="mb-3">The client may appoint the IRSDL employee on a trial basis. This is for a minimum of 1 hour and a maximum of 10 days. The client can terminate the IRSDL employee at any time during the trial period.</p>
              <p className="mb-3">Subject to the client complying with the provisions set out in schedule 1, the client can terminate full-time employees in the following manner:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>For less than 6 months from his or her appointment, a period of 30 days' notice is required.</li>
                <li>For more than 6 months, a period of 60 days' notice is required.</li>
              </ul>
              <p>Upon termination: The client will return all confidential information back to IRSDL.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Acceptance</h2>
              <p>The client accepts the terms as set out within the terms and conditions on IRSDL's website:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The client making a request for services; or</li>
                <li>The client appointing IRSDL to provide services to the client; or</li>
                <li>The client selecting an IRSDL employee; or</li>
                <li>The client making a payment of any amounts listed within schedule 1, including but not limited to setup fees, monthly fees and/or any payment of IRSDL invoices (whichever is the earliest); or</li>
                <li>The client indicating its acceptance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Duty of Confidentiality</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>IRSDL and the IRSDL employee acknowledge that while working for the client, they may have access to confidential information of the client.</li>
                <li>IRSDL and the IRSDL employee undertake not to disclose or use this information to any third parties.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Schedule 1 – Fee Structure</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Regular Billing System</h3>
              <p className="mb-3">If the client selects and appoints an IRSDL employee, the client must use the regular billing system.</p>
              <p className="mb-3">The client must pay IRSDL for the services in advance by using either of the following 2 options:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Prepaid payments</li>
                <li>Regular monthly payments</li>
              </ul>
              
              <p className="font-semibold mb-2">Via:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Credit card online payment</li>
                <li>Direct debit of credit cards and bank accounts</li>
                <li>Electronic fund transfer</li>
              </ul>
              
              <p className="mb-3">Each payment is to be made in advance or on an agreed fixed monthly date.</p>
              <p className="mb-3">The clients can make payments via electronic fund transfer (EFT) into IRSDL's INR bank accounts.</p>
              <p className="mb-3">If there is any overtime payment due, the amount of overtime chargeable to the client will be included in the following month's invoice.</p>
              <p className="mb-4">The client at any time may request a refund of the amount held with a 2-week refund processing period.</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Insufficient Funds</h3>
              <p className="mb-3">If:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>the available balance falls below zero; or</li>
                <li>The client does not pay on time under the prepaid payment option and/or the regular monthly payment option,</li>
              </ul>
              <p className="mb-3">IRSDL is entitled to suspend the services of the IRSDL employee for a period of 5 business days ("Suspension Period").</p>
              <p className="mb-4">During the suspension period, the client must pay IRSDL any amount in arrears, else the contract shall be terminated.</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Holidays</h3>
              <p>The IRSDL employee is entitled to request leave on public holidays of his or her location.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}