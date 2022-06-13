interface IButton {
	to?: {
		path: string;
		target?: "_blank" | "_parent" | "_self" | "_top";
	};
	action?: () => void;
	extend?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	ghost?: boolean;
	children?: any;
	reverseColor?: boolean;
}

export type { IButton };
