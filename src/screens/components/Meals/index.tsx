import { Plus } from "phosphor-react-native";
import { Text } from "react-native";
import { AddButton, Content, Date, Divider, Head, ListContent, MealCard, Name, Placeholder, Status, Time, Title } from "./styles";

export function Meals(){
	return (
		<Content>
			<Head>
				<Title>Refeições</Title>
				<AddButton>
				<Plus size={20} color="#FFF"/>
				<Placeholder>Nova refeição</Placeholder>
				</AddButton>
			</Head>
			<ListContent>
				<Date>08.12.23</Date>
				<MealCard>
				<Time>10:00</Time>
				<Divider/>
				<Name>Salada</Name>
				<Status/>
				</MealCard>
			</ListContent>
		</Content>
	)
}
