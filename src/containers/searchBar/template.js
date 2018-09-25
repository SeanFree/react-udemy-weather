import React from 'react';

export default function() {
    return (
        <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
            <input
                type="text"
                placeholder="Get a 5-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange.bind(this)} />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
    );
}
