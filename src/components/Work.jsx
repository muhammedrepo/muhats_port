import Project from '../components/Project'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import items from '../utils/data'
import Button from './Button'
import ContentPanel from './ContentPanel'

/**
 * This code defines a React functional component called `Work` that displays a list of projects.
 * It uses the `useState` hook to manage the state of whether the project list is expanded or not.
 * The component renders a `ContentPanel` component with a title and subtitle, and a `Project` component that displays the projects.
 * It also includes a button that allows the user to toggle between showing all projects or only a subset of projects.
 *
 * @returns {JSX.Element} The rendered React component.
 */
const Work = () => {
  // eslint-disable-next-line no-unused-vars
  const [expanded, setExpanded] = useState(false)
  const dataForDisplay = expanded ? items : items.slice(0, 3)

  return (
    <div id="work" className="pt-20 pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <ContentPanel
            title="Projects"
            subtitle="Recent Works"
            className="flex flex-col items-center"
          />

          <div className="w-full px-4">
            <div className="mb-12 flex flex-wrap items-center justify-center">
              <Project items={dataForDisplay} />

              <Button primary>
                <Link to="/projects"> View More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
