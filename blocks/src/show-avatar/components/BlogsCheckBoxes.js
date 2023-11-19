


export default function BlogsCheckBoxes( { attributes } ) {
    
    const blogs = ('blogs' in attributes) ? attributes.blogs : new Object

    const { blogs_list } = attributes;
  
    return (
        <ul>
            {
                blogs_list?.map((v) => (
                    <li key={v.value}><CheckboxControl
                        className="check_items"
                        label={v.label}
                        checked={checked_obj[v.value]}
                        onChange={(check) => {
                            check ? checked_obj[v.value] = true : delete checked_obj[v.value]
                            setAttributes({blogs: checked_obj})
                            setState({checked_obj})
                        }}
                    /></li>
                ))
            }
        </ul>
    );

 
}