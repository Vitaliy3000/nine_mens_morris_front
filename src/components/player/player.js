import { Component } from 'react';
import Stone from '../stone/stone.js'
import { Droppable, Draggable } from 'react-beautiful-dnd';


export default class Player extends Component {
    get_count_componets() {
        return 9;
    }

    render() {
        const style = {
            height: "100%",
            width: "100px",
            backgroundColor: "aqua",
        };

        // const stones = [];
        // for (let i = 0; i < this.get_count_componets(); i++) {
        //     stones.push(<Stone/>);
        // }

        const finalSpaceCharacters = [
            {
              id: 'gary',
              name: 'Gary Goodspeed',
              thumb: '/images/gary.png'
            },
            {
              id: 'cato',
              name: 'Little Cato',
              thumb: '/images/cato.png'
            },
            {
              id: 'kvn',
              name: 'KVN',
              thumb: '/images/kvn.png'
            },
            {
              id: 'mooncake',
              name: 'Mooncake',
              thumb: '/images/mooncake.png'
            },
            {
              id: 'quinn',
              name: 'Quinn Ergon',
              thumb: '/images/quinn.png'
            }
          ]

        return (
            <Droppable droppableId={this.props.name}>
                {(provided) => (
                    <div style={style} {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            Array.from(Array(10).keys()).map(id => {
                                return (
                                    <Draggable key={id} draggableId={id}>
                                        {(provided) => <Stone provided={provided}></Stone>}
                                    </Draggable>
                                )
                            })
                        }
                    </div>
                )}
            </Droppable>
        )
    }
  }
