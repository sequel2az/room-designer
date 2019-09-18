import React, { useState } from "react"
import { Menu, Icon, Sidebar, Segment, Grid } from "semantic-ui-react"
import Layout from "./layout"
import Back from "./Back"
import Next from "./Next"

const MobilePage = ({ options, content, prev, next }) => {
  const [menuVisibility, setMenuVisibility] = useState(false)

  const toggleMenu = () => setMenuVisibility(!menuVisibility)
  const closeMenu = () => setMenuVisibility(false)

  return (
    <Layout>
      <Menu inverted style={{ borderRadius: 0, margin: 0 }}>
        <Menu.Item name="menu" onClick={toggleMenu}>
          <Icon name="content" size="large" />
          Menu
        </Menu.Item>
      </Menu>

      <Sidebar.Pushable
        as={Segment}
        style={{
          minHeight: `${document.documentElement.clientHeight - 40}px`, // 40px menu heigth
          border: "none",
          margin: 0,
          borderRadius: 0,
          boxShadow: "none",
        }}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          vertical
          visible={menuVisibility}
        >
          {options()}
        </Sidebar>
        <Sidebar.Pusher style={{ minHeight: "100vh" }} onClick={closeMenu}>
          <Grid padded>
            <Grid.Row>
              <Grid.Column>{content(toggleMenu)}</Grid.Column>
            </Grid.Row>
            <Grid.Row columns="equal" style={{ marginTop: "15px" }}>
              <Grid.Column textAlign="left">
                {prev && <Back to={prev} />}
              </Grid.Column>
              <Grid.Column textAlign="right">
                {next && <Next to={next} />}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Layout>
  )
}

export default MobilePage
