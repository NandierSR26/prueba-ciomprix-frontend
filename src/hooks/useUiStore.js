import { useDispatch, useSelector } from "react-redux"
import { onCloseMenu, onOpenMenu } from "../store/ui/uiSlice";

export const useUiStore = () => {
    const { isMenuOpen } = useSelector( state => state.ui )
    const dispatch = useDispatch();

    const openMenu = () => {
        dispatch( onOpenMenu() )
    }

    const closeMenu = () => {
        dispatch( onCloseMenu() )
    }

    return {
        isMenuOpen,
        openMenu,
        closeMenu
    }
}