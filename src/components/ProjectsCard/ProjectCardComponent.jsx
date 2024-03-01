import React from 'react'
import './ProjectCardComponent.scss'
import tempImage from '../../images/nature.jpeg'
import javaImage from '../../images/skills/java.svg'
import springImage from '../../images/skills/spring.svg'
import githubIcon from '../../images/skills/github.svg'

function ProjectCardComponent() {
    return (
        <div className='ProjectCardComponent'>
            <img className='Left' src={tempImage} alt="" />
            <div className="Right">
                <h4>Title Of Project</h4>
                <div className="TechImage">
                    <img src={javaImage} alt="" />
                    <img src={springImage} alt="" />
                    <img src={javaImage} alt="" />
                    <img src={springImage} alt="" />
                </div>
                <p className='Description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates aperiam commodi? Ab perferendis commodi aliquam quaerat delectus quia pariatur fuga doloremque cumque, magni suscipit est unde, aliquid alias inventore.
                    Voluptas at molestiae exercitationem fugiat animi qui tempora nostrum? Laboriosam, error maxime? Fuga aliquam natus consequuntur et maiores dolorem, accusantium sequi unde reiciendis, ratione quibusdam, quis praesentium laborum! Illo, asperiores!
                    Odio molestiae nisi magni nostrum atque asperiores cum. Veniam eum voluptatum doloremque soluta delectus suscipit a velit labore optio aspernatur temporibus minus numquam, laborum fugit esse officiis facere est eveniet!
                    Iste doloribus exercitationem vitae atque, tempore sunt beatae illo recusandae totam aut ipsum dolorem error aperiam sapiente odit? Recusandae, exercitationem itaque? Qui nisi nemo quaerat quasi, aspernatur molestias maxime asperiores!
                </p>
                <div className="GithubButton">
                    <img src={githubIcon} alt="" />
                    <h5>Github</h5>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardComponent