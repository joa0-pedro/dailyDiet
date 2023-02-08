import styled from "styled-components/native";
import themes from "../../../themes";

export const PercentInfo = styled.View`
	background-color: ${themes.COLORS.GREEN_LIGHT};

	justify-content: center;
	padding-bottom: 66px;
	padding-top: 60px;

	margin-bottom: 40px;
`
export const Icon = styled.View`
		align-items: flex-start;
		margin-left: 24px;
`

export const Texts = styled.View`
	align-items: center;
	margin-top: -22px;
`

export const Value = styled.Text`
	font-size: ${themes.FONT_SIZE.XXL};
	font-family: ${themes.FONT_FAMILY.BOLD};
	color: ${themes.COLORS.GRAY_1};
`

export const Description = styled.Text`
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.REGULAR};
	color: ${themes.COLORS.GRAY_2};
`

export const Body = styled.View`
	background-color: ${themes.COLORS.WHITE};
	border-radius: 20px;
	margin-top: -66px;
	padding-top: 33px;
	padding-left: 24px;
	padding-right: 24px;
`

export const Title = styled.View`
	justify-content: center;
	flex-direction: row;
	margin-bottom: 23px;
`

export const TitleText = styled.Text`
	font-size: ${themes.FONT_SIZE.LG};
	font-family: ${themes.FONT_FAMILY.BOLD};
	color: ${themes.COLORS.GRAY_1};
`

export const Card = styled.View`
	background-color: ${themes.COLORS.GRAY_6};
	border-radius: 8px;
	justify-content: center;
	align-content: center;
	flex-direction: row;

	margin-bottom: 12px;
	padding: 16px;
`

export const MiniCardsContent = styled.View`
	justify-content: space-between;
	flex-direction: row;
`

export const MiniCardGreen = styled.View`
	background-color: ${themes.COLORS.GREEN_LIGHT};
	border-radius: 8px;
	justify-content: center;
	align-content: center;
	flex-direction: row;

	margin-right: 12px;
	padding: 16px;
`

export const MiniCardRed = styled.View`
	background-color: ${themes.COLORS.RED_LIGHT};
	border-radius: 8px;
	justify-content: center;
	align-content: center;
	flex-direction: row;

	padding: 16px;
`

export const CardTexts = styled.View`
	align-items: center;
`

export const Number = styled.Text`
	font-size: ${themes.FONT_SIZE.XL};
	font-family: ${themes.FONT_FAMILY.BOLD};
	color: ${themes.COLORS.GRAY_1};
`

export const Subtitle = styled.Text`
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.REGULAR};
	color: ${themes.COLORS.GRAY_2};
`
