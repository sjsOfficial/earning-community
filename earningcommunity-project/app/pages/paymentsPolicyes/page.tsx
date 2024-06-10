import React from "react";

const PaymentPolicy = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 ">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8  py-6 md:pt-40 ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Payment Policy
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Welcome to our community! This Payment Policy outlines the terms and
          conditions for processing payments on our platform.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          1. Payment Methods
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We accept various payment methods including credit/debit cards,
          PayPal, and other electronic payment systems. You can select your
          preferred payment method during the transaction process.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          2. Payment Processing
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          All payments are processed securely through our payment gateway
          providers. Your payment information is encrypted and transmitted
          securely to ensure your safety and privacy.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          3. Transaction Fees
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We may charge transaction fees for certain payment methods. These fees
          will be clearly disclosed at the time of the transaction. You are
          responsible for any applicable fees.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          4. Refund Policy
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Refund requests are handled on a case-by-case basis. If you are not
          satisfied with a purchase, please contact our support team within 30
          days of the transaction. Refunds will be processed using the original
          payment method.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          5. Chargebacks
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          If you initiate a chargeback, your account may be temporarily
          suspended while we investigate the issue. Repeated chargebacks may
          result in permanent account termination.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          6. Earnings and Payouts
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Earnings from your activities on our platform will be credited to your
          account. You can request a payout to your preferred payment method,
          subject to our minimum payout threshold and any applicable fees.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          7. Changes to This Policy
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We may update this Payment Policy from time to time. We will notify
          you of any changes by posting the new Payment Policy on this page.
          Please review this policy periodically for updates.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          8. Contact Us
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          If you have any questions about this Payment Policy, please contact us
          at: support@earningcommunity.com
        </p>
      </div>
    </div>
  );
};

export default PaymentPolicy;
