import StLayout from './StyledLayout'

interface props {
    children: any
}

function Layout({ children }: props) {
    return (
        <StLayout>{children}</StLayout>
    )
}

export default Layout