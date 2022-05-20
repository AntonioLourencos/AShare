interface IButton {
	to?: string;
	action?: () => void;
	extend?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	ghost?: boolean;
	children?: any;
}

export type { IButton };
