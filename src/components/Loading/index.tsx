import { Wrapper } from './styles'

const Loading = () => {
  return (
    <Wrapper>
      <div className='wrapper__cube'>
        <div className='cube__part cube__part--1' />
        <div className='cube__part cube__part--2' />
        <div className='cube__part cube__part--3' />
        <div className='cube__part cube__part--4' />
        <div className='cube__part cube__part--5' />
        <div className='cube__part cube__part--6' />
        <div className='cube__part cube__part--7' />
        <div className='cube__part cube__part--8' />
        <div className='cube__part cube__part--9' />
      </div>

      <p className='text'>Loading...</p>
    </Wrapper>
  )
}

export default Loading
