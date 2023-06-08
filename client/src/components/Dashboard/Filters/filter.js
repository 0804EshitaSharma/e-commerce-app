import { StyledFilter } from "../../Styles/Filter.styled"
 

export default function Filter(props) {
    return (
        <div className="horizontal-container">
            <input style={{ width: 'unset' }} value={props.name} type="checkbox" />
            <StyledFilter>
                {props.name}
            </StyledFilter>
        </div>
        
    )
}