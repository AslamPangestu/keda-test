import styles from "./index.module.sass";

const ContactModule = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <span>Contact Us</span>
      <div>
        <p>Ready to transform your business? We&apos;re here to help!</p>
        <p>
          Get in touch with our expert team to discuss your specific needs,
          request a demo, or learn more about our solutions.
        </p>
        <div>
          <span>Contact Information:</span>
          <ul>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Email: [email address removed]</li>
            <li>Address: 123 Main Street, Anytown, CA 12345</li>
          </ul>
        </div>
        <p>We look forward to hearing from you!</p>
      </div>
    </section>
  );
};

export default ContactModule;
