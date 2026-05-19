import { Button, Space, Dropdown, Flex, Avatar } from 'antd'
import { DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

function Navbar() {

    const navigate = useNavigate();

    const items = [
        {
            key: '1',
            label: 'Dashboard',
            icon: <DashboardOutlined />,
            onClick: () => navigate("/dashboard")
        },
        {
            key: '2',
            label: 'Settings',
            icon: <SettingOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: 'Logout',
            icon: <LogoutOutlined />,
            danger: true,
            onClick: () => handleLogout(),
        },
    ];

    const { isAuth, dispatch } = useAuth();

    const handleLogout = () => {

        dispatch({ type: "SET_LOGOUT" });
        localStorage.removeItem("user");
        window.toastify("Logout successful", "success");
        window.location.reload();
    }



    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/todos" className="nav-link">Todos</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Space>
                                {
                                    !isAuth ?
                                        <>
                                            <Link to="/auth/login" className="btn btn-success" >Login</Link>
                                            <Link to="/auth/register" className="btn btn-info" >Register</Link>
                                        </>
                                        :
                                        <>
                                            {/* <Link to="/dashboard" className="btn btn-info" >Dashboard</Link> */}
                                            <Dropdown
                                                menu={{ items }}
                                                trigger={['hover']}
                                                placement="bottomRight"
                                            >
                                                <Space>
                                                    <Avatar
                                                        size={44}
                                                        icon={<UserOutlined />}
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                </Space>
                                            </Dropdown>
                                            {/* <Button className="btn btn-danger" onClick={handleLogout}>Logout</Button> */}
                                        </>
                                }
                            </Space>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar