import styled from "styled-components/native";
import themes from "../../../themes";

export const Head = styled.View`
	background-color: ${themes.COLORS.GRAY_5};

	padding-top: 66px;
	padding-bottom: 52px;

	align-content: center;
	justify-content: center;
`

export const HeaderTexts = styled.View`
	align-items: center;
	margin-top: -34px;
`

export const Icon = styled.View`
	align-items: flex-start;
	margin-left: 24px;
`

export const Title = styled.Text`
	color: ${themes.COLORS.GRAY_2};
	font-size: ${themes.FONT_SIZE.XL};
	font-family: ${themes.FONT_FAMILY.BOLD};
`

export const Body = styled.View`
	background-color: ${themes.COLORS.WHITE};
	border-radius: 20px;
	margin-top: -20px;
`

export const CreateForm = styled.View`
	padding-top: 40px;
	padding-left: 24px;
	padding-right: 24px;
`

export const Field = styled.View`
`

export const SmallField = styled.View`
	flex-direction: row;
`

export const Input = styled.View`
	border-radius: 6px;
	border-width: 1px;
	border-color: ${themes.COLORS.GRAY_5};

	margin-bottom: 24px;
`

export const InputSM = styled(Input)`
	width: 172px;
	height: 48px;
	margin-right: 22px;
`

export const InputMD = styled(Input)`
	width: 365px;
	height: 48px;
`

export const InputXL = styled(Input)`
	width: 365px;
	height: 120px;
`

export const Label = styled.Text`
	color: ${themes.COLORS.GRAY_2};
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.BOLD};

	margin-bottom: 4px;
`

export const Select = styled.View`
	flex-direction: row;
`

export const Radius = styled.View`
	background-color: ${themes.COLORS.GRAY_6};
	border-radius: 6px;

	align-items: center;
	justify-content: center;

	width: 179px;
	height: 50px;

	margin-right: 8px;
	margin-top: 4px;

	flex-direction: row;
`

export const RadiusGreen = styled(Radius)`
	:focus {
		background-color: ${themes.COLORS.GREEN_LIGHT};
		border-color: ${themes.COLORS.GREEN_DARK};
		border-radius: 1px;
	}
`

export const RadiusRed = styled(Radius)`
	:focus {
		background-color: ${themes.COLORS.RED_LIGHT};
		border-color: ${themes.COLORS.RED_DARK};

		border-radius: 1px;
	}
`

export const Span = styled.View`
	border-radius: 999px;

	width: 8px;
	height: 8px;

	margin-right: 8px;
`

export const SpanGreen = styled(Span)`
	background-color: ${themes.COLORS.GREEN_DARK};
`

export const SpanRed = styled(Span)`
	background-color: ${themes.COLORS.RED_DARK};
`

export const RadiusText = styled.Text`
	color: ${themes.COLORS.GRAY_1};
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.BOLD};
`
export const SubmitButton = styled.View`
	background-color: ${themes.COLORS.GRAY_2};
	padding: 16px 104px;

	margin: 0px 24px;

	border-radius: 6px;
	margin-top: 198px;

	justify-content: center;
	align-items: center;
`
export const Placeholder = styled.Text`
	color: ${themes.COLORS.WHITE};
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.BOLD};
`
