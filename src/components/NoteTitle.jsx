const NoteTitle = ({ fetchData }) => {

  return (
    <div className="notes__title">
      <h2>Notes</h2>
      <button className="btn-refresh" onClick={() =>  {fetchData()}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
          <g id="surface44336697">
            <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(12.54902%,78.823531%,59.215689%)', fillOpacity: 1 }} d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 25 11 C 17.28125 11 11 17.28125 11 25 L 13 25 C 13 18.359375 18.359375 13 25 13 C 28.574219 13 31.773438 14.5625 33.96875 17.03125 L 31 20 L 38 20 L 38 13 L 35.40625 15.59375 C 32.839844 12.757812 29.117188 11 25 11 Z M 37 25 C 37 31.640625 31.640625 37 25 37 C 21.417969 37 18.226562 35.449219 16.03125 32.96875 L 19 30 L 12 30 L 12 37 L 14.625 34.375 C 17.183594 37.214844 20.882812 39 25 39 C 32.71875 39 39 32.71875 39 25 Z M 37 25 " />
          </g>
        </svg>
      </button>
    </div>
  )
}

export default NoteTitle;