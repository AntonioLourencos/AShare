import { type ICardPreview } from "@Types/components/cardPreview";
import * as Styles from "./styles";

const CardPreview = (props: ICardPreview): JSX.Element => {
	return (
		<a href={props.to} target="_blank" rel="noreferrer">
			<Styles.Container>{props.name}</Styles.Container>
		</a>
	);
};

export default CardPreview;
