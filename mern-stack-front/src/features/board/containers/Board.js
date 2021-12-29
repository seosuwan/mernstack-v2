import { LayOut } from "features/common";
import AlertModal from "../components/AlertModal";
import BoardEdit from "../components/BoardEdit";
import BoardList from "../components/BoardList";
import BoardRegister from "../components/BoardRegister";
import BoardView from "../components/BoardView";
import CommentList from "../components/CommentList";

export default function Board (){
    
    return(
        <LayOut>
        <div style={{textAlign: 'center'}}>
            <h1>자유게시판</h1>
            <BoardList/>
        <h1>게시판 등록</h1>
        <BoardRegister/>
        </div>
        </LayOut>
    )
        
    
}