import { 
    Entity, PrimaryGeneratedColumn, 
    Column, ManyToOne, OneToMany, 
    CreateDateColumn, UpdateDateColumn 
} from 'typeorm'

@Entity({ name: 'menu_item' })
class MenuItem {
    @PrimaryGeneratedColumn() id: number

    @Column({ length: 25 }) name: string

    @Column() url: string

    @Column() state: boolean

    // @Column({ length: 300 }) createdBy: string

    // @Column({ length: 300 }) lastChangedBy: string

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;


    @OneToMany(type => MenuItem, item => item.parent_id) child_ids: MenuItem[]

    @ManyToOne(type => MenuItem, item => item.child_ids) parent_id: MenuItem

}