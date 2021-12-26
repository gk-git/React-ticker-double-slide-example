import React, { useState } from 'react'
import Ticker from 'react-ticker'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';
import "./NewsSlider.scss"
export default function NewsSlider({ news }) {

    const [state, setState] = useState({
        activeItem: 0,
        move: 0,
        triggerOnResize: false,
    })

    /*
     * onNext
     *
     * This function will be passed to "react-ticker" component to
     * allow the component to track the state of the slider
     *
     * In more basics words this function will run whenever a new item get ready to be
     * shown in the view.
     *
     * This function will run even for the 1st item that show on the view
     *
     * index value will vary from 0 to infinite
     *
     * The use of this.state.move is to track if the function had run on the first item or not
     * */
    const onNext = (index) => {
        let activeIndex = (index) % news.length

        if (state.move) {
            setState(prevState => ({
                ...prevState,
                activeIndex: activeIndex + 1,
            }))
        } else {
            setState(prevState => ({
                ...prevState,
                move: true,
            }))
        }
    }

    const { activeIndex, move } = state

    /*
     * This block is to get the active new available on the view
     *
     * First set the active news to undefined for the case where news is an empty array
     * */
    let activeNew = undefined
    if (news.length > 0) {
        activeNew = news[0]
        const body = document.querySelector('body.rtl')
        const isRTL = body !== null
        if (activeIndex !== undefined && move) {
            activeNew = news[state.activeIndex % news.length]
        }

        return (
            <div className="news-slider">
                <div className="item">

                    <div className="item__info">
                        {
                            activeNew !== undefined ? (
                                <>
                                    <div>
                                        <TransitionGroup>
                                            <CSSTransition
                                                key={activeNew.id}
                                                timeout={1000}
                                                classNames="news-out"
                                            >
                                                <div>
                                                    <h5 className="item__info__author">{activeNew.name}</h5>
                                                    <span className="item__info__date">{activeNew.date}</span>
                                                </div>
                                            </CSSTransition>
                                        </TransitionGroup>
                                    </div>
                                </>
                            ) : null
                        }
                    </div>

                    <Ticker
                        offset="80%"
                        move={true}
                        speed={8}
                        onNext={onNext}
                        triggerOnResize={news.length > 0}
                        direction={isRTL ? 'toRight' : 'toLeft'}
                    >
                        {(item) => {
                            const { id, content } = news[(item.index) % news.length]
                            return (
                                <>
                                    <div className="item__content" key={id}>
                                        <p>{content}</p>
                                    </div>
                                </>
                            )
                        }}
                    </Ticker>
                </div>

            </div>
        )
    } else {
        return (
            <div className="news-slider">
                <span className="loading">Loading</span>
            </div>
        )
    }
}
NewsSlider.defaultProps = {
    news: []
}
NewsSlider.prototypes = {
    news: PropTypes.array
}