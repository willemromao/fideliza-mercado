import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaService } from './receita.service';
import { ReceitaRepository } from './receita.repository';
import { UsuarioRepository } from '../usuario/usuario.repository';

describe('ReceitaService', () => {
  let service: ReceitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReceitaService,
        {
          provide: ReceitaRepository,
          useValue: {
            upsert: jest.fn(),
            listarTodas: jest.fn(),
            buscarPorId: jest.fn(),
            buscarPorIdComIngredientes: jest.fn(),
            salvarConclusao: jest.fn(),
            remover: jest.fn(),
          },
        },
        {
          provide: UsuarioRepository,
          useValue: {
            buscarPorId: jest.fn(),
            upsert: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ReceitaService>(ReceitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
