interface IModal {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	children?: React.ReactNode;
}

export type { IModal };
