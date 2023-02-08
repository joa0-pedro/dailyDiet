import styled from "styled-components/native";
import themes from "../../../themes";

export const Content = styled.View``

export const Head = styled.View`
`

export const Title = styled.Text`
	font-size: ${themes.FONT_SIZE.LG};
`

export const AddButton = styled.View`
	flex-direction: row;
	background-color: ${themes.COLORS.GRAY_2};
	padding-left: 106px;
	padding-right: 106px;
	padding-top: 16px;
	padding-bottom: 16px;
	margin-top: 8px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
`
export const Placeholder = styled.Text`
	color: ${themes.COLORS.WHITE};
	margin-left: 12px;
`

export const ListContent = styled.View`
	margin-top: 32px;
`

export const Date = styled.Text`
	color: ${themes.COLORS.GRAY_1};
	font-size: ${themes.FONT_SIZE.LG};
	font-family: ${themes.FONT_FAMILY.BOLD};
`

export const MealCard = styled.View`
	border-radius: 8px;
	border-color: ${themes.COLORS.GRAY_5};
	border-width: 1px;

	flex-direction: row;

	margin-top: 8px;
	text-align: center;

	align-items: center;
	padding: 14px;
`

export const Time = styled.Text`
	color: ${themes.COLORS.GRAY_1};
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.BOLD};
`
export const Divider = styled.View`
	margin-left: 12px;
	margin-right: 12px;
	height: 14px;
	border-width: 1px;
	border-color: ${themes.COLORS.GRAY_4};
`

export const Name = styled.Text`
	color: ${themes.COLORS.GRAY_2};
	font-size: ${themes.FONT_SIZE.MD};
	width: 244px;
`

export const Status = styled.View`
	background-color: ${themes.COLORS.GREEN_MID};
	border-radius: 999px;
	margin-left: 12px;
	width: 18px;
	height: 18px;
`
