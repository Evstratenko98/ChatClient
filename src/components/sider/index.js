import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetRoomAction } from "../../redux/actions/room";
import { GetRoomsAction, ResetRoomsAction } from "../../redux/actions/rooms";
import Download from "../download";

const { Sider } = Layout;

const DefaultSider = () => {
    const dispatch = useDispatch();
    const { rooms, isLoading } = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(GetRoomsAction());

        return () => dispatch(ResetRoomsAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const inviteToRoom = (room) => {
        dispatch(GetRoomAction(room));
    };

    return (
        <Sider className="site-layout-background" width={200}>
            <Menu mode="inline" style={{ height: "100%" }}>
                {isLoading && <Download />}
                {rooms.map((room, index) => (
                    <Menu.Item key={index} onClick={() => inviteToRoom(room)}>
                        {room.title}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default DefaultSider;
