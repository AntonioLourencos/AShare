interface IIcon {
	name: string;
	to?: {
		path: string;
		target?: "_blank" | "_parent" | "_self" | "_top";
	};
	action?: () => void;
	type?: "line" | "fill";
	extend?: React.ButtonHTMLAttributes<HTMLElement>;
	children?: any;
}

export type { IIcon };
