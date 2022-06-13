import { type IIcon } from "@Types/components/icon";
import * as Styles from "./styles";

const Icon = ({
	name,
	action,
	children,
	extend,
	to,
	type = "fill",
}: IIcon): JSX.Element => {
	if (to) {
		return (
			<a href={to.path} target={to.target} {...extend}>
				<Styles.Container onClick={action} className={`ri-${name}-${type}`}>
					{...children}
				</Styles.Container>
			</a>
		);
	}
	return (
		<Styles.Container
			onClick={action}
			className={`ri-${name}-${type}`}
			{...extend}
		>
			{...children}
		</Styles.Container>
	);
};

export default Icon;
