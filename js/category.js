/**
 * Created by lcw on 2018/5/19.
 */
window.onload = function () {

    document.querySelector('.left_select').addEventListener('touchmove',function(e){

        e.preventDefault();

    });
    document.querySelector('.right_content').addEventListener('touchmove',function(e){

        e.preventDefault();

    });

    /*�������Ч��*/
    /*������һ������װ��һ������html�ṹ*/
    /*�ҵ�������*/
    /*���������ڸ�����*/
    new IScroll(document.querySelector('.left_select'),{
        scrollX:false,
        scrollY:true
    });
    new IScroll(document.querySelector('.right_content'),{
        scrollX:false,
        scrollY:true
    });
};

