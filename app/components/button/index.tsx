import { type IButton } from "@Types/components/button";
import * as Styles from "./styles";

const Button = (props: IButton): JSX.Element => {
	if (props.to) {
		return (
			<a href={props.to.path} target={props.to.target}>
				<Styles.Container
					onClick={props.action}
					ghost={props.ghost}
					reverseColor={props.reverseColor}
					{...props.extend}
				>
					{...props.children}
				</Styles.Container>
			</a>
		);
	}

	return (
		<Styles.Container
			onClick={props.action}
			ghost={props.ghost}
			reverseColor={props.reverseColor}
			{...props.extend}
		>
			{...props.children}
		</Styles.Container>
	);
};

export default Button;
