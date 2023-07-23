import './Controls.css';

export const Controls = () => {
    return (
        <>
            <div>
                <h2>Round 1</h2>
            </div>
            <div className="uk-grid uk-child-width-1-3">
                <div class="uk-flex uk-flex-center">
                    <p>
                        Wins
                        <br />
                        <span>0</span>
                    </p>
                </div>
                <div class="uk-flex uk-flex-center">
                    <p>
                        Draws
                        <br />
                        <span>0</span>
                    </p>
                </div>
                <div class="uk-flex uk-flex-center">
                    <p>
                        Bot Wins
                        <br />
                        <span>0</span>
                    </p>
                </div>
            </div>
        </>
    )
}