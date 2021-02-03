%% ---------------------------------------------
%  code by WangYuan
%  date 2019/05/11
%----------------------------------------------------
%%
function [ m3,e ] =Huffman_try(p)
% 函数输入p，p为概率分布，此函数功能是进行哈夫曼编码
% 函数输出h，h为各个元素的编码
% 函数输出e，e为输出的平均码长，还没写好，就随便初始化了一下
e=2;

if length(find(p<0))
    error('概率不应该小于0！')
end
if abs(sum(p)-1)>10e-10
    error('概率之和大于1，请检查输入！')
end

%% 生成霍夫曼树
n=length(p);
q=ones(1,(2*n-1))
q(1,1:n)=p;

%定义存放（2*n-1）个结点的结构体，将索引子结点和父结点全部初始化为-1，将故障s1-sn的概率赋给前n个结点。
for i=1:(2*n-1)
    Htree(i).lchild=-1;
    Htree(i).rchild=-1;
    Htree(i).parent=-1;
end
for i=1:n
    Htree(i).weight=p(i);
end

m1=0; 
m2=0;
for i=(n+1):(2*n-1)
    [min1,m1]= min(q); 
    q1=q;
    q1(m1)=1;
    [min2,m2]= min(q1); 
    Htree(i).weight=min1+min2; %新结点的权值等于当前权值最小两结点的权值之和
    Htree(i).lchild=m1; %新结点的左子树记为当前权值最小的结点
    Htree(i).rchild=m2; %新结点的右子树记为当前权值第二小的结点
    Htree(m1).parent=i; %保存当前权值最小的结点 的父结点
    Htree(m2).parent=i; %保存当前权值第二小的结点 的父结点
    
    q(i)=min1+min2;
    q(m1)=1;
    q(m2)=1;%更新当前待编码结点
end

%% 根据霍夫曼树编码 
m3=char(n,n);
for i=1:n
    j=i;
    a=n;
    while(Htree(j).parent~=-1)
        k=j;
        j=Htree(j).parent;
        if(Htree(j).lchild==k)
            m3(i,a)='0';
        else m3(i,a)='1';
        end 
        a=a-1;
    end
end

end