import Nav from 'react-bootstrap/Nav'

export default function TabNavigation({navItems, defaultActiveKey, onClick}){
    return(

        <>
            <div>
                <Nav justify variant="tabs" defaultActiveKey={defaultActiveKey}>
                    {
                        navItems.map(item => 
                            <Nav.Item key = {item}>
                                <Nav.Link eventKey={item} onClick={() => onClick(item)}>{item}</Nav.Link>
                            </Nav.Item>
                        )
                    }
                </Nav>
            </div>
        </>
    )
}