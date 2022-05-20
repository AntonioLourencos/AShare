import { Link } from "@remix-run/react";
import { type IButton } from "~/interfaces/components/button";
import * as Styles from "./style";

const Button = (props: IButton): JSX.Element => {
	if (props.to) {
		return (
			<Link to={props.to}>
				<Styles.Container
					onClick={props.action}
					ghost={props.ghost}
					{...props.extend}
				>
					{...props.children}
				</Styles.Container>
			</Link>
		);
	}

	return (
		<Styles.Container
			onClick={props.action}
			ghost={props.ghost}
			{...props.extend}
		>
			{...props.children}
		</Styles.Container>
	);
};

export default Button;
