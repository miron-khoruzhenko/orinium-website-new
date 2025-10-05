import { getTranslations } from "next-intl/server"
// import ContactFormClient from "./ContactForm.client"
import dynamic from "next/dynamic";
import ContactFormSkeleton from "./ContactForm.skeleton";

const ContactFormClient = dynamic(
  () => import('./ContactForm.client'),
  {
    // Показываем красивый skeleton, пока грузится JS клиентского компонента
    loading: () => <ContactFormSkeleton />,
    
    // Важно: мы все еще хотим, чтобы форма была в HTML от сервера
    ssr: true 
  }
);

export default async function ContactForm() {
  const t = await getTranslations("home.contact")

  const formStrings = {
    name: t("form.name"),
    email: t("form.email"),
    subject: t("form.subject"),
    subjects: {
      general: t("form.subjects.general"),
      partnership: t("form.subjects.partnership"),
      sponsorship: t("form.subjects.sponsorship"),
      join: t("form.subjects.join"),
      media: t("form.subjects.media"),
      other: t("form.subjects.other"),
    },
    message: t("form.message"),
    submit: t("form.submit"),
    success: t("form.success"),
  };

  const locationStrings = {
    title: t("location.title"),
    address: t("location.address"),
  };

  return (
    <ContactFormClient
      title={t("title")}
      formStrings={formStrings}
      locationStrings={locationStrings}
    />
  )
}