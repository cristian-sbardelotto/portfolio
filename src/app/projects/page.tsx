'use client';

import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ChevronRight } from 'lucide-react';

import { ProjectCard } from '@/components/ProjectCard';
import * as S from './styles';

import { projects } from '@/data/projectsMock';
import { Navigation, Pagination } from 'swiper';

export default function Projects() {
  return (
    <S.Container>
      <S.TitleGroup>
        <S.StyledTitle>
          My <span>Projects</span>
        </S.StyledTitle>

        <p>
          See all my projects
          <Link
            href='https://github.com/cristian-sbardelotto'
            target='_blank'
          >
            here <ChevronRight />
          </Link>
        </p>
      </S.TitleGroup>

      <main>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            '1168': {
              slidesPerView: 2,
            },
          }}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </S.Container>
  );
}
