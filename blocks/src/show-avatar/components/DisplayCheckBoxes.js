export default function DisplayCheckBoxes( { attributes } ) {
    
    const display = ('display' in attributes) ? attributes.display : new Object

    const { display_options } = attributes;
  
    return (
            <ul>
                {
                    display_options?.map((v) => (
                        <li key={v.value}><CheckboxControl
                            className="check_items"
                            label={v.label}
                            checked={checked_obj[v.value]}
                            onChange={(check) => {
                                check ? checked_obj[v.value] = true : delete checked_obj[v.value]
                                setAttributes({display: checked_obj})
                            }}
                        /></li>
                    ))
                }
            </ul>
        );
}