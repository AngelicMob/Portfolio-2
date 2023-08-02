import * as s from './DesignPahse.style'

export const DesignPhase = () => {
    return(
        <s.DesignPhaseContainer>
            <s.Title>Design Phase</s.Title>
            <InitialBox/> 
            <DottedList/> 
        </s.DesignPhaseContainer>
    )
}



function InitialBox(){
    return(
        <s.InitialCardContainer>{`By following all UI principles and guidelines, I created the layout and updated the components. I also utilized my UX knowledge and research to create a smooth transition between Dark and Light Mode by using HSL in the Colors and testing with neutral and primary colors.`}</s.InitialCardContainer>
    )
}


function DottedList(){
    return(
        <s.DottedListContainer>Initial txt</s.DottedListContainer>
    )
}