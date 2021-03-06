import React, { Component } from 'react';
import ImageList from './ImageList';
import EditBoard from './EditBoard/EditBoard';
import { Button } from 'reactstrap';

class BoardDetail extends Component {
    constructor(){
        super();
        this.state = {
            id: "",
            title: "",
            description: ""
        }
    };

    render(){
        const usersBoardsToShow = this.props.boards;
        const boardsToShow = usersBoardsToShow.map((board, i) => {
            this.setState({
                title: board.title
            })
            return (
                <div key={ i } id={ board._id } className="parent">
                    <div><h2>{ board.title }</h2></div>
                    <div>{ board.description }</div>
                    <Button className="button" onClick={ this.props.addNewImageButtonClick } id={ board._id }>Add New Image</Button>
                    <Button className="button" id={ board._id } onClick={ this.props.editBoardButtonClick }>Edit Board</Button>
                    <Button className="button" id={ board._id } onClick={ this.props.deleteBoardButtonClick }>Delete Board</Button>
                    <ImageList images = { board.images } deleteImageButtonClick= { this.props.deleteImageButtonClick } board = {board} />
                </div>
            )
        });  

        return(
            <div>
                <div>
                    <EditBoard toggleEdit={ this.props.toggleEdit } editModal={ this.props.editModal } handleEditSubmit={ this.props.handleEditSubmit } />
                </div>
                <div>
                    { boardsToShow }
                </div>
            </div>
        )
    }
}

export default BoardDetail;