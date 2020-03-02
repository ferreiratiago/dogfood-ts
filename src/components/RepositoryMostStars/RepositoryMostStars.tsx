import React from 'react';
import { Repository } from '../../models/repository';
import RepositoryAPIDetails from '../RepositoryAPIDetails';
import Title from '../Title';

interface RepositoryMostStars {
    repo: Repository;
}

export default React.memo(function RepositoryMostStars({ repo }: RepositoryMostStars) {
    return (
        <>
            <Title>Repository with most stars</Title>
            <a href={repo.url}>{repo.name}</a>
            <div>
                <h3>Details</h3>
                <p>Name: {repo.name}</p>
                <p>Full name: {repo.full_name}</p>
                <RepositoryAPIDetails name={repo.name} url={repo.url} />
            </div>
        </>
    );
});