// Типы для пропсов остаются без изменений
type FormStrings = {
	name: string;
	email: string;
	subject: string;
	subjects: {
		general: string;
		partnership: string;
		sponsorship: string;
		join: string;
		media: string;
		other: string;
	};
	message: string;
	submit: string;
	success: string;
};

type LocationStrings = {
	title: string;
	address: string;
};

type ContactFormClientProps = {
	title: string;
	formStrings: FormStrings;
	locationStrings: LocationStrings;
};